import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-website');
}

export default function CustomSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-website" />;
}

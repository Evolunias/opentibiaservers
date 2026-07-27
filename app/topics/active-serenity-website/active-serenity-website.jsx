import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-website');
}

export default function ActiveSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-website" />;
}

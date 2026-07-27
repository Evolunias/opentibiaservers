import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-website');
}

export default function TopSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-website" />;
}

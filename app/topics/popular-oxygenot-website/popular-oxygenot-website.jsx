import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-website');
}

export default function PopularOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-website" />;
}

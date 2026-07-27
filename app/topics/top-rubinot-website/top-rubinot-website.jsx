import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-website');
}

export default function TopRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-website" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-website');
}

export default function BestMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-website" />;
}

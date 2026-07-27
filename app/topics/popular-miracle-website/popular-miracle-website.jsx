import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-website');
}

export default function PopularMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-website" />;
}

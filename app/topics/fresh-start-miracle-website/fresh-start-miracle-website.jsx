import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-website');
}

export default function FreshStartMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-website" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-website');
}

export default function MiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="miracle-website" />;
}

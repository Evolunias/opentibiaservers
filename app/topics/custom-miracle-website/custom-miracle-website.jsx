import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-website');
}

export default function CustomMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-website" />;
}

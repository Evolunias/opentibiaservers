import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-ots');
}

export default function CustomMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-ots" />;
}

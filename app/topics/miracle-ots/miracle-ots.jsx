import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-ots');
}

export default function MiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="miracle-ots" />;
}

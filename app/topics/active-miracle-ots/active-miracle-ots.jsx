import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-ots');
}

export default function ActiveMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-ots" />;
}

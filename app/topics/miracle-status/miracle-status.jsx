import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-status');
}

export default function MiracleStatusKeywordPage() {
  return <StaticKeywordPage slug="miracle-status" />;
}

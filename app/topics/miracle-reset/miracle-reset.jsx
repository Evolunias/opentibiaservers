import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-reset');
}

export default function MiracleResetKeywordPage() {
  return <StaticKeywordPage slug="miracle-reset" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera');
}

export default function NoResetOlderaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera" />;
}

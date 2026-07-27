import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera');
}

export default function NoResetElderaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera" />;
}

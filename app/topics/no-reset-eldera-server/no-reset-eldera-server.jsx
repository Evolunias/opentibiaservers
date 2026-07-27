import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-server');
}

export default function NoResetElderaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-server" />;
}

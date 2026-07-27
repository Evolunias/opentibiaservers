import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-no-reset-server');
}

export default function Eldera15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-no-reset-server');
}

export default function Eldera74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-no-reset-server" />;
}

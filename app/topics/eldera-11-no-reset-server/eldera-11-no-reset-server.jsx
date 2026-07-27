import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-no-reset-server');
}

export default function Eldera11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-no-reset-server');
}

export default function Eldera96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-no-reset-server" />;
}

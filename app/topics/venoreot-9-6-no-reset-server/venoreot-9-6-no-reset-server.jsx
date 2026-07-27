import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-no-reset-server');
}

export default function Venoreot96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-no-reset-server" />;
}

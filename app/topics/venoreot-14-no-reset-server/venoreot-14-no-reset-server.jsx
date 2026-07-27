import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-no-reset-server');
}

export default function Venoreot14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-no-reset-server" />;
}

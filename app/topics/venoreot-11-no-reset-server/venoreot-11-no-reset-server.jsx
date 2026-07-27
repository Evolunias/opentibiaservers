import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-no-reset-server');
}

export default function Venoreot11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-no-reset-server" />;
}

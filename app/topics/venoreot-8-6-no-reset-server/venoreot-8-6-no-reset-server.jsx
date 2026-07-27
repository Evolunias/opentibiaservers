import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-6-no-reset-server');
}

export default function Venoreot86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-6-no-reset-server" />;
}

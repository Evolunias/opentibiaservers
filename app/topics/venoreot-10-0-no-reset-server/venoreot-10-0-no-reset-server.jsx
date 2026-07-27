import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-no-reset-server');
}

export default function Venoreot100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-no-reset-server" />;
}

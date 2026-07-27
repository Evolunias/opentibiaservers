import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-no-reset-server');
}

export default function Venoreot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-no-reset-server" />;
}

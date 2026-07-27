import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-no-reset-server');
}

export default function Venoreot12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-6-no-reset-server');
}

export default function Venoreot76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-6-no-reset-server" />;
}

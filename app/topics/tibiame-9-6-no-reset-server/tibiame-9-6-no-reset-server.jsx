import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-no-reset-server');
}

export default function Tibiame96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-no-reset-server" />;
}

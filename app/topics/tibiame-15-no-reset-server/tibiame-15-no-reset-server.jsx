import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-no-reset-server');
}

export default function Tibiame15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-no-reset-server" />;
}

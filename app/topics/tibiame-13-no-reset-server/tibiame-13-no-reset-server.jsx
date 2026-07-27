import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-no-reset-server');
}

export default function Tibiame13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-no-reset-server" />;
}

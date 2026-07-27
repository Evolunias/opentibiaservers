import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-no-reset-server');
}

export default function Tibiame14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-no-reset-server');
}

export default function Tibiame12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-no-reset-server');
}

export default function Tibiame76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-no-reset-server" />;
}

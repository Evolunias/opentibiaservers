import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-6-no-reset-server');
}

export default function Tibiara86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-6-no-reset-server" />;
}

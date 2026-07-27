import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-no-reset-server');
}

export default function Tibiara11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-no-reset-server" />;
}

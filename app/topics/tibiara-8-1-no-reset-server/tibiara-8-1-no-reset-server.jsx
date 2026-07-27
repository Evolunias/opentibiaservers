import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-no-reset-server');
}

export default function Tibiara81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-no-reset-server" />;
}

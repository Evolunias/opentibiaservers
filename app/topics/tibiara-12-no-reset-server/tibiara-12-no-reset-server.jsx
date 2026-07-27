import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-no-reset-server');
}

export default function Tibiara12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-no-reset-server');
}

export default function Tibiara15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-no-reset-server" />;
}

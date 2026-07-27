import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-no-reset-server');
}

export default function Tibiara74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-no-reset-server" />;
}

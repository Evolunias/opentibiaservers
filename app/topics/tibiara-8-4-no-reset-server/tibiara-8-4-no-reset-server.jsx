import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-no-reset-server');
}

export default function Tibiara84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-no-reset-server" />;
}

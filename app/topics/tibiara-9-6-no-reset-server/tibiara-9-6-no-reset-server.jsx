import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-no-reset-server');
}

export default function Tibiara96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-no-reset-server" />;
}

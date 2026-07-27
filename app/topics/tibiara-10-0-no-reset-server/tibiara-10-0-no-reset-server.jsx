import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-no-reset-server');
}

export default function Tibiara100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-no-reset-server" />;
}

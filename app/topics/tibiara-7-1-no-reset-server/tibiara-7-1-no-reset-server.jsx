import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-1-no-reset-server');
}

export default function Tibiara71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-1-no-reset-server" />;
}

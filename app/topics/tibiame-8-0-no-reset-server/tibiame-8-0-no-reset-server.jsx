import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-no-reset-server');
}

export default function Tibiame80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-no-reset-server" />;
}

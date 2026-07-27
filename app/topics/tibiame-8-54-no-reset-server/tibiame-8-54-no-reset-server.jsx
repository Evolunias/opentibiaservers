import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-no-reset-server');
}

export default function Tibiame854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-no-reset-server');
}

export default function Tibia84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-no-reset-server" />;
}

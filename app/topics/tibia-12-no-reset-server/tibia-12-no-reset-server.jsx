import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-server');
}

export default function Tibia12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-server" />;
}

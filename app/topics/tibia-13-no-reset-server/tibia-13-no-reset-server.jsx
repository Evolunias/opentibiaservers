import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-server');
}

export default function Tibia13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-tibia-private-server');
}

export default function Tibia11NoResetTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-tibia-private-server" />;
}

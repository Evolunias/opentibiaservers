import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-ot-server');
}

export default function Tibia12NoResetOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-ot-server" />;
}

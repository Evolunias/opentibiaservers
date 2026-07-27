import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-ot-server');
}

export default function Tibia11NoResetOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-ot-server" />;
}

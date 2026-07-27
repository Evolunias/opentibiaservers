import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-ot-server');
}

export default function Tibia15NoResetOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-ot-server');
}

export default function Tibia14NoResetOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-ot-server" />;
}

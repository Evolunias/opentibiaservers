import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-no-reset-ot-server');
}

export default function Tibia76NoResetOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-no-reset-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-no-reset-ot-server');
}

export default function Tibia100NoResetOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-no-reset-ot-server" />;
}

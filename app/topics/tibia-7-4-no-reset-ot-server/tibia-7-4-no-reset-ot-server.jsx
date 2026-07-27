import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-no-reset-ot-server');
}

export default function Tibia74NoResetOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-no-reset-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-ot-server');
}

export default function Tibia71NoResetOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-no-reset-open-tibia-server');
}

export default function Tibia74NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-no-reset-open-tibia-server" />;
}

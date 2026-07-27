import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-no-reset-server');
}

export default function Tibia96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-no-reset-server" />;
}

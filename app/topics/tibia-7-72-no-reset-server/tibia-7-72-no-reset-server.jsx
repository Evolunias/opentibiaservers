import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-no-reset-server');
}

export default function Tibia772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-no-reset-server" />;
}

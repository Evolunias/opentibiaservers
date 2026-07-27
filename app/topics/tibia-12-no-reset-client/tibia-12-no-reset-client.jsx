import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-client');
}

export default function Tibia12NoResetClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-client" />;
}

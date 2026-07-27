import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-no-reset-client');
}

export default function Tibia96NoResetClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-no-reset-client" />;
}

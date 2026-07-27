import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-no-reset-client');
}

export default function Tibia84NoResetClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-no-reset-client" />;
}

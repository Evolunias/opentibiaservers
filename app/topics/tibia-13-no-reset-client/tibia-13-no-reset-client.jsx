import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-client');
}

export default function Tibia13NoResetClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-client" />;
}

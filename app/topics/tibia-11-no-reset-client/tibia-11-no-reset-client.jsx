import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-client');
}

export default function Tibia11NoResetClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-client" />;
}

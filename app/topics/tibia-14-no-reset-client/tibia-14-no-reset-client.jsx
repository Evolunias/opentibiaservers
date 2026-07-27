import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-client');
}

export default function Tibia14NoResetClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-client" />;
}

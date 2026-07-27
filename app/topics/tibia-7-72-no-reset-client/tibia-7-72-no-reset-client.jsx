import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-no-reset-client');
}

export default function Tibia772NoResetClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-no-reset-client" />;
}

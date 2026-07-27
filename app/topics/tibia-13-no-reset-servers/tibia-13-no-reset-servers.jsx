import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-servers');
}

export default function Tibia13NoResetServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-servers" />;
}

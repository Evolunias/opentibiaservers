import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-servers');
}

export default function Tibia12NoResetServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-no-reset-servers');
}

export default function Tibia86NoResetServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-no-reset-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-servers');
}

export default function Tibia14NoResetServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-servers" />;
}

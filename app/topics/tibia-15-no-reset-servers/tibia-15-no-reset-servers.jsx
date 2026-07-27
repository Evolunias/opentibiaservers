import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-servers');
}

export default function Tibia15NoResetServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-servers" />;
}

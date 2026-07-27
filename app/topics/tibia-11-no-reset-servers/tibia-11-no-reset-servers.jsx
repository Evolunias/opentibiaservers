import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-servers');
}

export default function Tibia11NoResetServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-servers" />;
}

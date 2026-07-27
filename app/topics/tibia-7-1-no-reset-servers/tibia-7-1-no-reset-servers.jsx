import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-servers');
}

export default function Tibia71NoResetServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-servers" />;
}

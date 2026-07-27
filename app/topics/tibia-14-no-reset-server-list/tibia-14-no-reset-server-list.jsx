import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-server-list');
}

export default function Tibia14NoResetServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-server-list" />;
}

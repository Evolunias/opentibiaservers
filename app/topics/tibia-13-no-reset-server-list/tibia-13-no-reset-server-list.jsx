import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-server-list');
}

export default function Tibia13NoResetServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-server-list" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-server-list');
}

export default function Tibia12NoResetServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-server-list" />;
}

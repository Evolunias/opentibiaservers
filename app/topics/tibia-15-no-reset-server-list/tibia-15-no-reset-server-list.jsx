import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-server-list');
}

export default function Tibia15NoResetServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-server-list" />;
}

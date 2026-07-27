import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-server-list');
}

export default function Tibia71NoResetServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-server-list" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-no-reset-server-list');
}

export default function Tibia854NoResetServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-no-reset-server-list" />;
}

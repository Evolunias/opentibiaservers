import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-server-list');
}

export default function Tibia11NoResetServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-server-list" />;
}

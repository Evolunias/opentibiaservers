import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-enforced-server-usa');
}

export default function ClassickDrakoriaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-enforced-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-6-pvp-enforced-server');
}

export default function ClassickDrakoria86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-6-pvp-enforced-server" />;
}

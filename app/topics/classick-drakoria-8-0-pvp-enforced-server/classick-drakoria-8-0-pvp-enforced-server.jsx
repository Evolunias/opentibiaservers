import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-pvp-enforced-server');
}

export default function ClassickDrakoria80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-pvp-enforced-server" />;
}

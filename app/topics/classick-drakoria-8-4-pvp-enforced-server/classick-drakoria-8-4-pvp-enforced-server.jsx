import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-4-pvp-enforced-server');
}

export default function ClassickDrakoria84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-4-pvp-enforced-server" />;
}

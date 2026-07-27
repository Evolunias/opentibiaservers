import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-enforced-server-uk');
}

export default function DuraOnlinePvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-enforced-server-uk" />;
}

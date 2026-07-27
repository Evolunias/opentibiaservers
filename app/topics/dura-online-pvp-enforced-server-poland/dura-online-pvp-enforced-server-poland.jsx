import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-enforced-server-poland');
}

export default function DuraOnlinePvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-enforced-server-poland" />;
}

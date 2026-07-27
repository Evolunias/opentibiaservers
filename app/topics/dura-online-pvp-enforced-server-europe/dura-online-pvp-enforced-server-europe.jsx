import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-enforced-server-europe');
}

export default function DuraOnlinePvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-enforced-server-europe" />;
}

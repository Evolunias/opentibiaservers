import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-europe');
}

export default function DuraOnlineNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-europe" />;
}

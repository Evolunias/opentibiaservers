import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-poland');
}

export default function DuraOnlineNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-poland" />;
}

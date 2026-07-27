import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-uk');
}

export default function DuraOnlineNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-uk" />;
}

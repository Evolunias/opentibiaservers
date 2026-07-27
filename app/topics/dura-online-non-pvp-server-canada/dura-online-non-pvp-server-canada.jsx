import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-canada');
}

export default function DuraOnlineNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-canada" />;
}

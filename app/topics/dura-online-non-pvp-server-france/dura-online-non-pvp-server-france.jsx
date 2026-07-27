import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-france');
}

export default function DuraOnlineNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-france" />;
}

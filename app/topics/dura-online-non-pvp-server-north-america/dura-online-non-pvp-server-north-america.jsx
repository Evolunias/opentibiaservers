import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-north-america');
}

export default function DuraOnlineNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-north-america" />;
}

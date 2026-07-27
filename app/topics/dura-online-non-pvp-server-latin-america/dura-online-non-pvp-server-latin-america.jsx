import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-latin-america');
}

export default function DuraOnlineNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-latin-america" />;
}

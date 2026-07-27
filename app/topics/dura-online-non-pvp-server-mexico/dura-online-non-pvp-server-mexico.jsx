import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-mexico');
}

export default function DuraOnlineNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-mexico" />;
}

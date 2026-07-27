import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-brazil');
}

export default function DuraOnlineNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-brazil" />;
}

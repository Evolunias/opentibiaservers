import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-4-non-pvp-server');
}

export default function DuraOnline84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-4-non-pvp-server" />;
}

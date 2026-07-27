import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-non-pvp-server');
}

export default function DuraOnline11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-non-pvp-server" />;
}

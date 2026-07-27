import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-6-non-pvp-server');
}

export default function DuraOnline76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-6-non-pvp-server" />;
}

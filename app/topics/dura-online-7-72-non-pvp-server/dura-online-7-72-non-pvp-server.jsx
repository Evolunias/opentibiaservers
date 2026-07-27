import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-72-non-pvp-server');
}

export default function DuraOnline772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-72-non-pvp-server" />;
}

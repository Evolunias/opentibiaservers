import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-98-non-pvp-server');
}

export default function DuraOnline1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-98-non-pvp-server" />;
}

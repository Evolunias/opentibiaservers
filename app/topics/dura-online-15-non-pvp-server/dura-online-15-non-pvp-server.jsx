import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-non-pvp-server');
}

export default function DuraOnline15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-non-pvp-server" />;
}

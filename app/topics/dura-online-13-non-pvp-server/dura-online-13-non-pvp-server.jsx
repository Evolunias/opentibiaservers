import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-non-pvp-server');
}

export default function DuraOnline13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-non-pvp-server" />;
}

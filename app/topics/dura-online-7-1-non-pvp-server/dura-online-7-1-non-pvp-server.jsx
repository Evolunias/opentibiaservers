import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-1-non-pvp-server');
}

export default function DuraOnline71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-1-non-pvp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-non-pvp-server');
}

export default function DuraOnline96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-non-pvp-server" />;
}

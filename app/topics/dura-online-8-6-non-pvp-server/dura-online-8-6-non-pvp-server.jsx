import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-6-non-pvp-server');
}

export default function DuraOnline86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-6-non-pvp-server" />;
}

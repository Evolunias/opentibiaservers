import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-non-pvp-server');
}

export default function DuraOnline100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-non-pvp-server" />;
}

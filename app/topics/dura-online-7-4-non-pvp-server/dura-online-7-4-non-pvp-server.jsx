import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-4-non-pvp-server');
}

export default function DuraOnline74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-4-non-pvp-server" />;
}

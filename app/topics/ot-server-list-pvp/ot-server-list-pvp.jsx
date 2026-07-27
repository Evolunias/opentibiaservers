import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-pvp');
}

export default function OtServerListPvpKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-pvp" />;
}

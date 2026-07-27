import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-non-pvp');
}

export default function OtServerListNonPvpKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-non-pvp" />;
}

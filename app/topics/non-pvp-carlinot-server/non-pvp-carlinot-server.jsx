import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-carlinot-server');
}

export default function NonPvpCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-carlinot-server" />;
}

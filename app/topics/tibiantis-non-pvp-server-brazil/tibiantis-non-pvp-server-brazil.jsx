import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-brazil');
}

export default function TibiantisNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-brazil" />;
}

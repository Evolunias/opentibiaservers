import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-mexico');
}

export default function TibiantisNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-mexico" />;
}

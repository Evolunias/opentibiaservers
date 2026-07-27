import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-mexico');
}

export default function AlasteraNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-mexico" />;
}

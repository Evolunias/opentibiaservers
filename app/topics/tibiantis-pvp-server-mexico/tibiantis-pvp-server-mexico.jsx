import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-mexico');
}

export default function TibiantisPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-mexico" />;
}

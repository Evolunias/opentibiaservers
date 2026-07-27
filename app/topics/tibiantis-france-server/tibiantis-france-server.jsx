import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-france-server');
}

export default function TibiantisFranceServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-france-server" />;
}

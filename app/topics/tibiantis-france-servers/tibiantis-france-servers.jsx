import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-france-servers');
}

export default function TibiantisFranceServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-france-servers" />;
}

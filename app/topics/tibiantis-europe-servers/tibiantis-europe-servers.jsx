import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-europe-servers');
}

export default function TibiantisEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-europe-servers" />;
}

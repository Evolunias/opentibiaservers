import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-europe-server');
}

export default function TibiantisEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-europe-server" />;
}

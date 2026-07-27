import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-france');
}

export default function TibijkaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-france" />;
}

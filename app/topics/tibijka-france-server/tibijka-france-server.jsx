import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-france-server');
}

export default function TibijkaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-france-server" />;
}

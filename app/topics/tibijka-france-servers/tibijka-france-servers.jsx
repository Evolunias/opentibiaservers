import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-france-servers');
}

export default function TibijkaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-france-servers" />;
}

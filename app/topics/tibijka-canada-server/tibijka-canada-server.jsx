import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-canada-server');
}

export default function TibijkaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-canada-server" />;
}

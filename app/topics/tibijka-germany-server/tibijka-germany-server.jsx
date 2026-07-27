import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-germany-server');
}

export default function TibijkaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-germany-server" />;
}

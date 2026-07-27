import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-argentina-server');
}

export default function TibijkaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-argentina-server" />;
}

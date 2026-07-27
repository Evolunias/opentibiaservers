import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-argentina-servers');
}

export default function TibijkaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-argentina-servers" />;
}

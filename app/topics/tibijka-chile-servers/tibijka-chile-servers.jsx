import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-chile-servers');
}

export default function TibijkaChileServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-chile-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-germany-servers');
}

export default function TibijkaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-germany-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-client');
}

export default function TibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="tibijka-client" />;
}

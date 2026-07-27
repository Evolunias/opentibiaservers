import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-client');
}

export default function LowrateTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-client" />;
}

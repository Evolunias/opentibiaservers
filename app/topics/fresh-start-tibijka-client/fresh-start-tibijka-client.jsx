import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-client');
}

export default function FreshStartTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-client" />;
}

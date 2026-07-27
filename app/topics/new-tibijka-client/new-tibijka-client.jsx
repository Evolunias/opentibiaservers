import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-client');
}

export default function NewTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-client" />;
}

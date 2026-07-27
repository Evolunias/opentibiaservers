import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-client');
}

export default function CurrentClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-client" />;
}

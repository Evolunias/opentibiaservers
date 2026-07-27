import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-client');
}

export default function CurrentTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-client" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-client');
}

export default function LowrateTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-client" />;
}

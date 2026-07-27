import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-client');
}

export default function NewTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-client" />;
}

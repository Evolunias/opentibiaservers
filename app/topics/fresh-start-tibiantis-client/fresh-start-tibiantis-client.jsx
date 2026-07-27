import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-client');
}

export default function FreshStartTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-client" />;
}

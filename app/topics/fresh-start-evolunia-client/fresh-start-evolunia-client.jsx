import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-client');
}

export default function FreshStartEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-client" />;
}

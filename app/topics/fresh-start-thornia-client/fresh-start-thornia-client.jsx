import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-client');
}

export default function FreshStartThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-client" />;
}

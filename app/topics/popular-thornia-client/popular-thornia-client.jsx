import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-client');
}

export default function PopularThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-client" />;
}

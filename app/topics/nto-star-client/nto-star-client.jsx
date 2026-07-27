import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-client');
}

export default function NtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="nto-star-client" />;
}

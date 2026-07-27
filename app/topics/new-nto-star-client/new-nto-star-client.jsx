import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-client');
}

export default function NewNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-client" />;
}

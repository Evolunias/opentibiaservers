import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-client');
}

export default function CustomNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-client" />;
}

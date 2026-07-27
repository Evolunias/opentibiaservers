import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-client');
}

export default function ActiveNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-client" />;
}

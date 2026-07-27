import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-client');
}

export default function OfficialNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-client" />;
}

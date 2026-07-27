import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-server');
}

export default function NewNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-server" />;
}

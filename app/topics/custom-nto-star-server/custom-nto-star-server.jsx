import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-server');
}

export default function CustomNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-server" />;
}

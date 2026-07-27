import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-server');
}

export default function ActiveNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-server" />;
}

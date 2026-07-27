import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-server');
}

export default function LowrateNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-server" />;
}

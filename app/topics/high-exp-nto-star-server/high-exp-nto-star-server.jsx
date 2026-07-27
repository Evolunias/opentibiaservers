import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-nto-star-server');
}

export default function HighExpNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-nto-star-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-nto-star-server');
}

export default function LowExpNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-nto-star-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-high-exp-server');
}

export default function NtoStar12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-high-exp-server" />;
}

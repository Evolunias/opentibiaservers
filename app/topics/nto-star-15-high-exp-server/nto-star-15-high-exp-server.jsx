import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-high-exp-server');
}

export default function NtoStar15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-high-exp-server" />;
}

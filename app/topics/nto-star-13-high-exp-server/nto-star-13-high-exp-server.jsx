import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-high-exp-server');
}

export default function NtoStar13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-high-exp-server" />;
}

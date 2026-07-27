import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-high-exp-server');
}

export default function NtoStar11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-high-exp-server" />;
}

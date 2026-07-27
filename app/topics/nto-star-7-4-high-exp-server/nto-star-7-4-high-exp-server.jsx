import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-high-exp-server');
}

export default function NtoStar74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-high-exp-server" />;
}

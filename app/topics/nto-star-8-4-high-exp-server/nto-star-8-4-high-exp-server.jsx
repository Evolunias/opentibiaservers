import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-high-exp-server');
}

export default function NtoStar84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-high-exp-server" />;
}

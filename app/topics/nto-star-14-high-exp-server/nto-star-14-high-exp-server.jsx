import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-high-exp-server');
}

export default function NtoStar14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-high-exp-server" />;
}

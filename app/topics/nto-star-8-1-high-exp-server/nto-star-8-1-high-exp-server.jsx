import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-1-high-exp-server');
}

export default function NtoStar81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-1-high-exp-server" />;
}

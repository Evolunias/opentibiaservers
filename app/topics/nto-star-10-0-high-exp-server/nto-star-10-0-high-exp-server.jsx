import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-high-exp-server');
}

export default function NtoStar100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-high-exp-server" />;
}

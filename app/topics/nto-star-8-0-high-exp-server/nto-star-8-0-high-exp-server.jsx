import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-high-exp-server');
}

export default function NtoStar80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-high-exp-server" />;
}

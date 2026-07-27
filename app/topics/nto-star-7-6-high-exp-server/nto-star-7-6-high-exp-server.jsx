import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-high-exp-server');
}

export default function NtoStar76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-high-exp-server" />;
}

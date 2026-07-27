import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-low-exp-server');
}

export default function NtoStar12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-low-exp-server" />;
}

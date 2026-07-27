import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-low-exp-server');
}

export default function NtoStar74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-low-exp-server" />;
}

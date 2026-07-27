import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-6-low-exp-server');
}

export default function NtoStar86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-6-low-exp-server" />;
}

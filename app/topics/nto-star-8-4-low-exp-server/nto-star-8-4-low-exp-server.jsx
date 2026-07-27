import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-low-exp-server');
}

export default function NtoStar84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-low-exp-server" />;
}

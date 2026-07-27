import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-1-low-exp-server');
}

export default function NtoStar71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-1-low-exp-server" />;
}

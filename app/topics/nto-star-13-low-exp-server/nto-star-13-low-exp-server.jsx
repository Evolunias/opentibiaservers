import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-low-exp-server');
}

export default function NtoStar13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-low-exp-server" />;
}

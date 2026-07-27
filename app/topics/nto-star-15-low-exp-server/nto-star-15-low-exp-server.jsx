import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-low-exp-server');
}

export default function NtoStar15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-low-exp-server" />;
}

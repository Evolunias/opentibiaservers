import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-low-exp-server');
}

export default function NtoStar11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-low-exp-server" />;
}

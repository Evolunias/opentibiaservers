import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-9-6-low-exp-server');
}

export default function NtoStar96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-9-6-low-exp-server" />;
}

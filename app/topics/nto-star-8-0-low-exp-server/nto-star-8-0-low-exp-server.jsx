import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-low-exp-server');
}

export default function NtoStar80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-low-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-low-exp-server');
}

export default function NtoStar14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-low-exp-server" />;
}

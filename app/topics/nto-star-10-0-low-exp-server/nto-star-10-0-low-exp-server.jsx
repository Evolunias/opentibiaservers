import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-low-exp-server');
}

export default function NtoStar100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-low-exp-server" />;
}

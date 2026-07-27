import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-ot-server');
}

export default function NtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-ot-server" />;
}

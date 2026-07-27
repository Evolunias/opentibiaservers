import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-ot-server');
}

export default function ActiveNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-ot-server" />;
}

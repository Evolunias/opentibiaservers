import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-ot-server');
}

export default function CustomNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-ot-server" />;
}

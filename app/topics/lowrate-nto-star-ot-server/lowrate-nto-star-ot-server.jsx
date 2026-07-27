import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-ot-server');
}

export default function LowrateNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-ot-server');
}

export default function NewNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-ot-server" />;
}

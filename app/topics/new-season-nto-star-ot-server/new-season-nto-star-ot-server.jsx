import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-ot-server');
}

export default function NewSeasonNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-ot-server" />;
}

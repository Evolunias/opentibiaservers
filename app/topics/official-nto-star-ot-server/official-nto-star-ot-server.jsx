import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-ot-server');
}

export default function OfficialNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-ot-server" />;
}

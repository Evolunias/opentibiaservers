import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-ot');
}

export default function OfficialNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-ot" />;
}

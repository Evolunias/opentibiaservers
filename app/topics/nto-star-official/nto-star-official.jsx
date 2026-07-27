import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-official');
}

export default function NtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="nto-star-official" />;
}

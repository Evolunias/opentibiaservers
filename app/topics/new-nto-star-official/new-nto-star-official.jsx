import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-official');
}

export default function NewNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-official');
}

export default function CustomNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-official" />;
}

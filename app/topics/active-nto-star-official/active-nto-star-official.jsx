import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-official');
}

export default function ActiveNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-official" />;
}

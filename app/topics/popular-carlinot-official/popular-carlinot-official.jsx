import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-official');
}

export default function PopularCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-official" />;
}

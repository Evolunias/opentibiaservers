import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-official');
}

export default function PopularClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-official" />;
}

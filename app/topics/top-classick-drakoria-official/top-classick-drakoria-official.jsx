import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-official');
}

export default function TopClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-official" />;
}

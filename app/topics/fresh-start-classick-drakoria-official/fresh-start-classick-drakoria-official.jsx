import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-official');
}

export default function FreshStartClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-official" />;
}

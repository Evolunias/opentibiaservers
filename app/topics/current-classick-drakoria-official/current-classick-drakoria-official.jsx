import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-official');
}

export default function CurrentClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-official" />;
}

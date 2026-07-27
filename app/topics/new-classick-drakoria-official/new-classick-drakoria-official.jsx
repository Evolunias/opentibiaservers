import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-official');
}

export default function NewClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-official" />;
}

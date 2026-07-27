import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-ots');
}

export default function NewSeasonThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-ots" />;
}

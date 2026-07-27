import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-ots');
}

export default function NewSeasonCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-ots" />;
}

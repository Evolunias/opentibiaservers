import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-ot');
}

export default function NewSeasonCanobOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-ot" />;
}

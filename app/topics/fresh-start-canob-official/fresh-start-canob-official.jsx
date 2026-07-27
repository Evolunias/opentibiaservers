import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-official');
}

export default function FreshStartCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-official');
}

export default function CurrentCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-canob-official" />;
}

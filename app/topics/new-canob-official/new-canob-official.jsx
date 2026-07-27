import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-official');
}

export default function NewCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-canob-official" />;
}

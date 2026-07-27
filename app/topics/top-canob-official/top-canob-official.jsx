import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-official');
}

export default function TopCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-canob-official" />;
}

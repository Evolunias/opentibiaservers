import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-official');
}

export default function LowrateCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-official" />;
}

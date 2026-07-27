import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-official');
}

export default function CustomCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-official" />;
}

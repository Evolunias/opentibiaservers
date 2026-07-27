import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-official');
}

export default function CanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="canob-official" />;
}

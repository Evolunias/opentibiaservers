import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-official');
}

export default function OfficialCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-canob-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-tibia');
}

export default function OfficialCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-canob-tibia" />;
}

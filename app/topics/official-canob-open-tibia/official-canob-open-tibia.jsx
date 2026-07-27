import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-open-tibia');
}

export default function OfficialCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-canob-open-tibia" />;
}

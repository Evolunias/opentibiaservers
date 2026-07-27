import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-open-tibia');
}

export default function ActiveCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-canob-open-tibia" />;
}

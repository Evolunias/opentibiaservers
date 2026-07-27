import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-tibia');
}

export default function ActiveCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-canob-tibia" />;
}

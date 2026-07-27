import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-tibia');
}

export default function CustomCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-tibia');
}

export default function CustomOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-tibia" />;
}

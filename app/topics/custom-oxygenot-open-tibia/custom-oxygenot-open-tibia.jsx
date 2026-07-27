import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-open-tibia');
}

export default function CustomOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-open-tibia" />;
}

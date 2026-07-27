import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-open-tibia');
}

export default function TopOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-open-tibia" />;
}

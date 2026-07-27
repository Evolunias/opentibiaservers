import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-open-tibia');
}

export default function LowrateImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-open-tibia" />;
}

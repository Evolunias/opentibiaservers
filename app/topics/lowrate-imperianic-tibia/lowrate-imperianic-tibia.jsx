import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-tibia');
}

export default function LowrateImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-tibia" />;
}

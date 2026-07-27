import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-open-tibia');
}

export default function LowrateAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-open-tibia" />;
}

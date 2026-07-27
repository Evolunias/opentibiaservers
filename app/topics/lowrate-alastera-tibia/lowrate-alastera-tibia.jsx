import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-tibia');
}

export default function LowrateAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-tibia" />;
}

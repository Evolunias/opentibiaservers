import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-tibia');
}

export default function LowrateUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-tibia" />;
}

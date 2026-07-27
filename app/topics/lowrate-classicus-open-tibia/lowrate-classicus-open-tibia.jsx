import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-open-tibia');
}

export default function LowrateClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-open-tibia" />;
}

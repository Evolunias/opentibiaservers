import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-open-tibia');
}

export default function LowrateEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-open-tibia" />;
}

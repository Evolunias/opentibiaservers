import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-open-tibia');
}

export default function EvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="evolera-open-tibia" />;
}

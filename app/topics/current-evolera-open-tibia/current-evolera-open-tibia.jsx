import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-open-tibia');
}

export default function CurrentEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-open-tibia" />;
}

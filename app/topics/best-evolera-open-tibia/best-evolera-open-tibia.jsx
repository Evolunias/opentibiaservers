import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-open-tibia');
}

export default function BestEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-open-tibia" />;
}

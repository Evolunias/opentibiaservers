import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-open-tibia');
}

export default function PopularEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-open-tibia" />;
}

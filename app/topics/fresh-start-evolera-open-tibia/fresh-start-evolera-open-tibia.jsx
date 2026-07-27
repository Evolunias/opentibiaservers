import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-open-tibia');
}

export default function FreshStartEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-open-tibia" />;
}

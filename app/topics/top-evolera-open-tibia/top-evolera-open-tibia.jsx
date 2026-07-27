import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-open-tibia');
}

export default function TopEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-open-tibia" />;
}

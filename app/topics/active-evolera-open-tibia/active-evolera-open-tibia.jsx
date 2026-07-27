import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-open-tibia');
}

export default function ActiveEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-open-tibia');
}

export default function CustomEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-open-tibia" />;
}

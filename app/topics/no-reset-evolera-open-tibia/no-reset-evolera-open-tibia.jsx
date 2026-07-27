import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-open-tibia');
}

export default function NoResetEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-open-tibia" />;
}

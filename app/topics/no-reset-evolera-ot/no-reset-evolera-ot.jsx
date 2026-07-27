import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-ot');
}

export default function NoResetEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-ot" />;
}

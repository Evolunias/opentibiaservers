import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-ot');
}

export default function NoResetUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-ot" />;
}

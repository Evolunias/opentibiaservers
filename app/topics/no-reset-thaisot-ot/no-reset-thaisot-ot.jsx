import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-ot');
}

export default function NoResetThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-ot" />;
}

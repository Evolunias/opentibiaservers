import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-ot');
}

export default function NoResetYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-ot" />;
}

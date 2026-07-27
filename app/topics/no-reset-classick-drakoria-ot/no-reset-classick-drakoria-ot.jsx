import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-ot');
}

export default function NoResetClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-ot" />;
}

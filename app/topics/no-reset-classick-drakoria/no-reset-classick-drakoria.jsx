import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria');
}

export default function NoResetClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria" />;
}

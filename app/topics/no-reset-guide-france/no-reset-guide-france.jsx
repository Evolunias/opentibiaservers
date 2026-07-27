import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-france');
}

export default function NoResetGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-france');
}

export default function HighExpStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-france');
}

export default function LowExpStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-france" />;
}

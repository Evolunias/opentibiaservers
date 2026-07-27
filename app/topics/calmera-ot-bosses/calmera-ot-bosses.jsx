import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-bosses');
}

export default function CalmeraOtBossesKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-bosses" />;
}

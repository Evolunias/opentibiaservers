import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-bosses');
}

export default function HarmoniaOtBossesKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-bosses" />;
}

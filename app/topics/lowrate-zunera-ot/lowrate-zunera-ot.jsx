import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot');
}

export default function LowrateZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot" />;
}

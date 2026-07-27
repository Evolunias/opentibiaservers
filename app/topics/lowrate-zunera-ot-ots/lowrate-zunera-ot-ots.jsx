import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-ots');
}

export default function LowrateZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-ots" />;
}

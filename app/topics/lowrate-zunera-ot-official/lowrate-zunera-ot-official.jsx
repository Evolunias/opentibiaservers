import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-official');
}

export default function LowrateZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-official" />;
}

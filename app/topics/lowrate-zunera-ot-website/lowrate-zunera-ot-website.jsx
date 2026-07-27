import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-website');
}

export default function LowrateZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-website" />;
}

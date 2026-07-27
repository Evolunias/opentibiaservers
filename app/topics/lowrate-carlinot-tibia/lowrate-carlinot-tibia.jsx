import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-tibia');
}

export default function LowrateCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-tibia" />;
}

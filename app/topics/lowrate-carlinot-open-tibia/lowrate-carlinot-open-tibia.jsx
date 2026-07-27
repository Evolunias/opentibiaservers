import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-open-tibia');
}

export default function LowrateCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-open-tibia" />;
}

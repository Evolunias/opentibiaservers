import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-tibia');
}

export default function OfficialCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-open-tibia');
}

export default function OfficialCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-open-tibia" />;
}

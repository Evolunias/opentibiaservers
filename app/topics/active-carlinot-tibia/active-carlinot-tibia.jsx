import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-tibia');
}

export default function ActiveCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-tibia" />;
}

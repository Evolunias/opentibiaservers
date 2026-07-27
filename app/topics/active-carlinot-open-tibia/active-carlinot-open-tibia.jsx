import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-open-tibia');
}

export default function ActiveCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-open-tibia" />;
}

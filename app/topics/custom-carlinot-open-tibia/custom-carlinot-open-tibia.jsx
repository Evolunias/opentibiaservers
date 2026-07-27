import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-open-tibia');
}

export default function CustomCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-open-tibia" />;
}

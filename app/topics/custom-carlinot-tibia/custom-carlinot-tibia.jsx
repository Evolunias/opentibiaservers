import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-tibia');
}

export default function CustomCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-tibia" />;
}

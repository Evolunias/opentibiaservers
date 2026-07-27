import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-tibia');
}

export default function TopCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-tibia" />;
}

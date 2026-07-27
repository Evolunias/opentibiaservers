import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-tibia');
}

export default function BestCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-tibia" />;
}

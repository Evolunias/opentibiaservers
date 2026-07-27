import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-open-tibia');
}

export default function BestCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-open-tibia" />;
}

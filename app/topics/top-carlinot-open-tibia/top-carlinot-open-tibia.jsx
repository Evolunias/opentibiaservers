import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-open-tibia');
}

export default function TopCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-open-tibia" />;
}

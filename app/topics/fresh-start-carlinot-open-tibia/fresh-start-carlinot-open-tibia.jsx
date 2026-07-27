import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-open-tibia');
}

export default function FreshStartCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-open-tibia" />;
}

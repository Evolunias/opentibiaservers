import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-tibia');
}

export default function FreshStartCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-tibia" />;
}

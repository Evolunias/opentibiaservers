import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-open-tibia');
}

export default function FreshStartRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-open-tibia" />;
}

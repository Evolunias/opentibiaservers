import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-open-tibia');
}

export default function FreshStartRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-tibia');
}

export default function FreshStartThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-tibia" />;
}

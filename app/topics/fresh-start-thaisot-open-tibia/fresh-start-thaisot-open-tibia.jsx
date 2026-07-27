import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-open-tibia');
}

export default function FreshStartThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-tibia');
}

export default function TopThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-tibia" />;
}

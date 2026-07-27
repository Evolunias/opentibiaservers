import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-tibia');
}

export default function CurrentThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-tibia" />;
}

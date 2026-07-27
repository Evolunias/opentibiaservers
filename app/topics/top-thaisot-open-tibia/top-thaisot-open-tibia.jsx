import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-open-tibia');
}

export default function TopThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-open-tibia" />;
}

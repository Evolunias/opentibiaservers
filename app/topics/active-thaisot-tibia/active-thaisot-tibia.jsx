import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-tibia');
}

export default function ActiveThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-tibia" />;
}

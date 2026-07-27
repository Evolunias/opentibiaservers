import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-tibia');
}

export default function CustomThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-tibia" />;
}

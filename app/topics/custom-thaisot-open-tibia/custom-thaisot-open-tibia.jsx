import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-open-tibia');
}

export default function CustomThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-open-tibia" />;
}

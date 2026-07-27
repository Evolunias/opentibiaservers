import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-open-tibia');
}

export default function ActiveThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-open-tibia" />;
}

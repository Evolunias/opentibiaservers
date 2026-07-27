import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-open-tibia');
}

export default function NewThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-open-tibia" />;
}

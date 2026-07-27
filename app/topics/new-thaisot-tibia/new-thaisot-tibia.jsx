import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-tibia');
}

export default function NewThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-tibia" />;
}

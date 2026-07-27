import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-open-tibia');
}

export default function NewBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-open-tibia" />;
}

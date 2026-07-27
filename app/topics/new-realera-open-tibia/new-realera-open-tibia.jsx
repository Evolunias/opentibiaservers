import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-open-tibia');
}

export default function NewRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-realera-open-tibia" />;
}

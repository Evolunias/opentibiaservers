import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-open-tibia');
}

export default function NewRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-open-tibia" />;
}

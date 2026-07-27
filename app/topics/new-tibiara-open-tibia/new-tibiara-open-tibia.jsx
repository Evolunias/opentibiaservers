import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-open-tibia');
}

export default function NewTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-open-tibia" />;
}

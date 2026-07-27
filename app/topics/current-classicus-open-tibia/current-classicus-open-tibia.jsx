import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-open-tibia');
}

export default function CurrentClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-open-tibia" />;
}

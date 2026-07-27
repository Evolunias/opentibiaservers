import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-tibia');
}

export default function CurrentClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-tibia" />;
}

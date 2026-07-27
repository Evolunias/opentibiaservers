import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-tibia');
}

export default function CurrentTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-tibia" />;
}

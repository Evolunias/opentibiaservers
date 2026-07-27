import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-open-tibia');
}

export default function CurrentDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-open-tibia" />;
}

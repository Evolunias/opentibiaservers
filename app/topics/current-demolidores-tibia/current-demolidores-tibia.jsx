import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-tibia');
}

export default function CurrentDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-tibia" />;
}

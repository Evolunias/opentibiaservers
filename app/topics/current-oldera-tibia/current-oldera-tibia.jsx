import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-tibia');
}

export default function CurrentOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-tibia" />;
}

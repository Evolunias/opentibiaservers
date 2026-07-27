import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-open-tibia');
}

export default function CurrentOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-open-tibia" />;
}

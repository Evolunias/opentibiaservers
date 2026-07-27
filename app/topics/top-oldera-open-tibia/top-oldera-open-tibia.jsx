import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-open-tibia');
}

export default function TopOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-open-tibia" />;
}

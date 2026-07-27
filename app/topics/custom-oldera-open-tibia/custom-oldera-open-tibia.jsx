import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-open-tibia');
}

export default function CustomOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-open-tibia" />;
}

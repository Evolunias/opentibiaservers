import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-open-tibia');
}

export default function CustomAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-open-tibia" />;
}

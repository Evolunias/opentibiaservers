import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-open-tibia');
}

export default function TopAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-open-tibia" />;
}

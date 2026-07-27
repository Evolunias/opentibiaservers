import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-open-tibia');
}

export default function ActiveAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-open-tibia" />;
}

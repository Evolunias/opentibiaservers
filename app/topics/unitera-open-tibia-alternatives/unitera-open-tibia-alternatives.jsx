import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-open-tibia-alternatives');
}

export default function UniteraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="unitera-open-tibia-alternatives" />;
}

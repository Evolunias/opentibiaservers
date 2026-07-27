import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-open-tibia-alternatives');
}

export default function QuinteraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="quintera-open-tibia-alternatives" />;
}

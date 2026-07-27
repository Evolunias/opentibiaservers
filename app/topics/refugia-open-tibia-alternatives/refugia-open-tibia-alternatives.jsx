import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-open-tibia-alternatives');
}

export default function RefugiaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="refugia-open-tibia-alternatives" />;
}

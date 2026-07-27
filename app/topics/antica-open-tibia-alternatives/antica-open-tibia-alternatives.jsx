import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-open-tibia-alternatives');
}

export default function AnticaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="antica-open-tibia-alternatives" />;
}

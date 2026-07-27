import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-open-tibia-alternatives');
}

export default function EleraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="elera-open-tibia-alternatives" />;
}

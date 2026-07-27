import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-open-tibia-alternatives');
}

export default function EterniaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="eternia-open-tibia-alternatives" />;
}

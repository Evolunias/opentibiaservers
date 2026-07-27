import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-open-tibia-alternatives');
}

export default function NovaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="nova-open-tibia-alternatives" />;
}

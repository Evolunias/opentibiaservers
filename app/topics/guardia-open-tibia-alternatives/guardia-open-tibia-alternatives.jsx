import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-open-tibia-alternatives');
}

export default function GuardiaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="guardia-open-tibia-alternatives" />;
}

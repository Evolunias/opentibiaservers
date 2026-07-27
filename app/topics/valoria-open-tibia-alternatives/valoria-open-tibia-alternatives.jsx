import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-open-tibia-alternatives');
}

export default function ValoriaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="valoria-open-tibia-alternatives" />;
}

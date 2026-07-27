import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-open-tibia-alternatives');
}

export default function DoleraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="dolera-open-tibia-alternatives" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-open-tibia-alternatives');
}

export default function DanubiaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="danubia-open-tibia-alternatives" />;
}

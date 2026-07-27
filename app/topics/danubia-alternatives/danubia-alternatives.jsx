import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-alternatives');
}

export default function DanubiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="danubia-alternatives" />;
}

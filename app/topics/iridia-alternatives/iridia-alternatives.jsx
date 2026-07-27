import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-alternatives');
}

export default function IridiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="iridia-alternatives" />;
}

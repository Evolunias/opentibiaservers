import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-alternatives');
}

export default function SameraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="samera-alternatives" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-alternatives');
}

export default function SabrehavenAlternativesKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-alternatives" />;
}

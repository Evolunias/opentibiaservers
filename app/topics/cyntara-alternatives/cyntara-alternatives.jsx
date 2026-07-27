import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-alternatives');
}

export default function CyntaraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="cyntara-alternatives" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-alternatives');
}

export default function AldoraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="aldora-alternatives" />;
}

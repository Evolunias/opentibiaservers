import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-optional-pvp');
}

export default function TenebraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="tenebra-optional-pvp" />;
}

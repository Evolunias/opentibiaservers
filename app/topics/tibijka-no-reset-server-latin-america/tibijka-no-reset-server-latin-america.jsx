import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-latin-america');
}

export default function TibijkaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-latin-america" />;
}

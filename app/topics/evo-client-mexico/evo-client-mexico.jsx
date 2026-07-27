import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-mexico');
}

export default function EvoClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-client-mexico" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-mexico');
}

export default function EvoServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-mexico" />;
}

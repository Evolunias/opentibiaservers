import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-evo-server');
}

export default function Alastera81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-evo-server" />;
}

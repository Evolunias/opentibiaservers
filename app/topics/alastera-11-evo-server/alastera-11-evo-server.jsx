import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-evo-server');
}

export default function Alastera11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-evo-server" />;
}

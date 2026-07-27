import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-6-evo-server');
}

export default function Alastera86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-6-evo-server" />;
}

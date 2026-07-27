import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-evo-server');
}

export default function Alastera74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-evo-server" />;
}

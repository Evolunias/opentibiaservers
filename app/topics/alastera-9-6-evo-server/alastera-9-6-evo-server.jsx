import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-evo-server');
}

export default function Alastera96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-evo-server" />;
}

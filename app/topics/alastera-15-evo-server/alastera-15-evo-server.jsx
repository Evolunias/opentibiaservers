import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-evo-server');
}

export default function Alastera15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-evo-server" />;
}

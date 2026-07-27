import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-evo-server');
}

export default function Alastera1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-evo-server" />;
}

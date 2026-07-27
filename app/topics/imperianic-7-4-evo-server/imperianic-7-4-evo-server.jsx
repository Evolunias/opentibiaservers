import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-evo-server');
}

export default function Imperianic74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-evo-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-evo-server');
}

export default function Imperianic86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-evo-server" />;
}

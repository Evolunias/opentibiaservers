import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-evo-server');
}

export default function Imperianic15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-evo-server" />;
}

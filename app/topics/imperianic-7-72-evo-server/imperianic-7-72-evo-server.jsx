import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-72-evo-server');
}

export default function Imperianic772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-72-evo-server" />;
}

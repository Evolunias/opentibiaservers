import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-low-exp-server');
}

export default function Imperianic11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-low-exp-server" />;
}

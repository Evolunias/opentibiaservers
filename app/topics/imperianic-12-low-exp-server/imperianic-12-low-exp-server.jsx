import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-low-exp-server');
}

export default function Imperianic12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-low-exp-server" />;
}

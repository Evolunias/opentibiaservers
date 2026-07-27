import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-low-exp-server');
}

export default function Imperianic15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-low-exp-server" />;
}

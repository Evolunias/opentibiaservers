import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-low-exp-server');
}

export default function Imperianic86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-low-exp-server" />;
}

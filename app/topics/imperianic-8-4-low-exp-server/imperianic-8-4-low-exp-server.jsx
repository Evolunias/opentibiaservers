import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-low-exp-server');
}

export default function Imperianic84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-low-exp-server" />;
}

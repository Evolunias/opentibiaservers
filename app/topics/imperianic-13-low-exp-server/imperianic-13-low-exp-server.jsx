import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-low-exp-server');
}

export default function Imperianic13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-low-exp-server" />;
}

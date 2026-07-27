import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-low-exp-server');
}

export default function Imperianic14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-low-exp-server" />;
}

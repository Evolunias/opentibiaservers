import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-low-exp-server');
}

export default function Carlinot81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-low-exp-server" />;
}

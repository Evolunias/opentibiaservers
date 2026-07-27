import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-low-exp-server');
}

export default function Demolidores12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-low-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-low-exp-server');
}

export default function Nostalther84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-low-exp-server" />;
}

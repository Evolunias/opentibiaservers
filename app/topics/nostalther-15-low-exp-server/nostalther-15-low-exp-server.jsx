import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-low-exp-server');
}

export default function Nostalther15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-low-exp-server" />;
}

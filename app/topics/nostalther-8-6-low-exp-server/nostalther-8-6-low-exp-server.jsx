import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-low-exp-server');
}

export default function Nostalther86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-low-exp-server" />;
}

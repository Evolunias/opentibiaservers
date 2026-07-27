import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-6-low-exp-server');
}

export default function Nostalther76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-6-low-exp-server" />;
}

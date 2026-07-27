import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-low-exp-server');
}

export default function Nostalther11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-low-exp-server" />;
}

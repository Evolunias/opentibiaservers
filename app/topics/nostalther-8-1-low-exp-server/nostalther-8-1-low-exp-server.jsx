import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-low-exp-server');
}

export default function Nostalther81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-low-exp-server" />;
}

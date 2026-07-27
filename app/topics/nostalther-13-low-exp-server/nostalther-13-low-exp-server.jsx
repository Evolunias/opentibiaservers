import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-low-exp-server');
}

export default function Nostalther13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-low-exp-server" />;
}

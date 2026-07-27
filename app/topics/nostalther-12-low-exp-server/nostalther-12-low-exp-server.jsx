import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-low-exp-server');
}

export default function Nostalther12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-low-exp-server" />;
}

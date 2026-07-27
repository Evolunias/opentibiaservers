import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-low-exp-server');
}

export default function Nostalther14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-low-exp-server" />;
}

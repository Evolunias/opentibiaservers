import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-high-exp-server');
}

export default function Nostalther84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-high-exp-server" />;
}

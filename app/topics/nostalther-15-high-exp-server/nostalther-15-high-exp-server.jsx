import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-high-exp-server');
}

export default function Nostalther15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-high-exp-server" />;
}

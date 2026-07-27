import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-high-exp-server');
}

export default function Nostalther11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-high-exp-server" />;
}

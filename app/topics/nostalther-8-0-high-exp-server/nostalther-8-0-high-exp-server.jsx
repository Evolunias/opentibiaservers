import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-high-exp-server');
}

export default function Nostalther80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-high-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-high-exp-server');
}

export default function Nostalther81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-high-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-high-exp-server');
}

export default function Nostalther14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-high-exp-server" />;
}

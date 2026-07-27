import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-high-exp-server');
}

export default function Nostalther13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-high-exp-server" />;
}

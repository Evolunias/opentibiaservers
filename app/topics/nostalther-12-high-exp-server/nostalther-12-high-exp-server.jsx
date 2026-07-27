import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-high-exp-server');
}

export default function Nostalther12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-high-exp-server" />;
}

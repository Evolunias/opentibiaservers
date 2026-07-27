import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-high-exp-server');
}

export default function Nostalther96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-high-exp-server" />;
}

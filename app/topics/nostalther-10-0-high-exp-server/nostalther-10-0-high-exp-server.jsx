import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-high-exp-server');
}

export default function Nostalther100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-high-exp-server" />;
}

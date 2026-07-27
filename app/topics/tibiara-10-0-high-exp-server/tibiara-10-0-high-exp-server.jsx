import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-high-exp-server');
}

export default function Tibiara100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-high-exp-server" />;
}

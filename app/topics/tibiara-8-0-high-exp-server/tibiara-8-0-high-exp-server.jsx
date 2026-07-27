import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-0-high-exp-server');
}

export default function Tibiara80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-0-high-exp-server" />;
}

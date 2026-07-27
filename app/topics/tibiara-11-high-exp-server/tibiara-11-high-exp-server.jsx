import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-high-exp-server');
}

export default function Tibiara11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-high-exp-server" />;
}

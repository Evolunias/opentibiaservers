import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-high-exp-server');
}

export default function Tibiara12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-high-exp-server" />;
}

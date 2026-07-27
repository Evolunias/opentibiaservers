import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-high-exp-server');
}

export default function Tibiara15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-high-exp-server" />;
}

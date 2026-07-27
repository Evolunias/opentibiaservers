import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-high-exp-server');
}

export default function Tibiara14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-high-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-1-high-exp-server');
}

export default function Tibiara71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-1-high-exp-server" />;
}

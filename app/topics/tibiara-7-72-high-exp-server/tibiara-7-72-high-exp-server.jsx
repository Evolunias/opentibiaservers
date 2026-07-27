import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-72-high-exp-server');
}

export default function Tibiara772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-72-high-exp-server" />;
}

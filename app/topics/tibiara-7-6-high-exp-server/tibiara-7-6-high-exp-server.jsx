import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-high-exp-server');
}

export default function Tibiara76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-high-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-high-exp-server');
}

export default function Tibiara1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-high-exp-server" />;
}

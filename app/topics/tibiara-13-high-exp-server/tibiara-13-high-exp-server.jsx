import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-high-exp-server');
}

export default function Tibiara13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-high-exp-server" />;
}

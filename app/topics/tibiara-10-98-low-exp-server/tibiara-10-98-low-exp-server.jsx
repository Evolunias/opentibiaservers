import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-low-exp-server');
}

export default function Tibiara1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-low-exp-server" />;
}

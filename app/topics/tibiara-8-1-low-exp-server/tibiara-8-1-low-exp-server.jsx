import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-low-exp-server');
}

export default function Tibiara81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-low-exp-server" />;
}

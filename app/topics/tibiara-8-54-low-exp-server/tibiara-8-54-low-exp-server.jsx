import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-54-low-exp-server');
}

export default function Tibiara854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-54-low-exp-server" />;
}

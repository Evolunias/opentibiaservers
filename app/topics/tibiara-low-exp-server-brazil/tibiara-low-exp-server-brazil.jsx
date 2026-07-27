import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-brazil');
}

export default function TibiaraLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-brazil" />;
}

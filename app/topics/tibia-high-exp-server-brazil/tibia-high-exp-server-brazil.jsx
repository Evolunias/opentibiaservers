import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-brazil');
}

export default function TibiaHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-brazil" />;
}

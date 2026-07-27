import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-usa');
}

export default function TibiaraHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-usa" />;
}

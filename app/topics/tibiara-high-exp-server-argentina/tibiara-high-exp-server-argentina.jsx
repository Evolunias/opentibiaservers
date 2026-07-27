import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-argentina');
}

export default function TibiaraHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-argentina" />;
}

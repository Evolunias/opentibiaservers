import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-argentina');
}

export default function TibiaraLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-argentina" />;
}

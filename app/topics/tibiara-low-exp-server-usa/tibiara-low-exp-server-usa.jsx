import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-usa');
}

export default function TibiaraLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-usa" />;
}

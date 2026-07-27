import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-mexico');
}

export default function TibiaraLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-mexico" />;
}

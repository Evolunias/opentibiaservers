import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-mexico');
}

export default function TibiaHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-mexico" />;
}

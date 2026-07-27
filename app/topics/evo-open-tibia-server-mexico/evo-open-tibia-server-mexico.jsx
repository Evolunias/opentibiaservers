import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-mexico');
}

export default function EvoOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-mexico" />;
}

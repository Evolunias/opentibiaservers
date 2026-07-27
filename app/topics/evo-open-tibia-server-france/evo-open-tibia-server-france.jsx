import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-france');
}

export default function EvoOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-france" />;
}

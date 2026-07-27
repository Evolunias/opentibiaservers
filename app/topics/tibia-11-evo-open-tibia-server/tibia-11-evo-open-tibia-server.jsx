import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-open-tibia-server');
}

export default function Tibia11EvoOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-open-tibia-server" />;
}

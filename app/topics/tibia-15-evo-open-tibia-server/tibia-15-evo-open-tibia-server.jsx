import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-open-tibia-server');
}

export default function Tibia15EvoOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-open-tibia-server" />;
}

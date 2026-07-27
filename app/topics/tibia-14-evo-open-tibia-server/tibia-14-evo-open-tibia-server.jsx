import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-open-tibia-server');
}

export default function Tibia14EvoOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-open-tibia-server" />;
}

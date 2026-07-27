import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-open-tibia-server');
}

export default function Tibia13EvoOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-open-tibia-server" />;
}

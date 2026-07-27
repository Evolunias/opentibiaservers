import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-south-america');
}

export default function EvoOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-south-america" />;
}

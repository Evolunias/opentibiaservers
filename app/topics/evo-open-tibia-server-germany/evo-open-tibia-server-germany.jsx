import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-germany');
}

export default function EvoOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-germany" />;
}

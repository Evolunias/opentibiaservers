import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-canada');
}

export default function EvoOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-canada" />;
}

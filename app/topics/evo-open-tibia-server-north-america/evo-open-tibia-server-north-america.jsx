import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-north-america');
}

export default function EvoOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-north-america" />;
}

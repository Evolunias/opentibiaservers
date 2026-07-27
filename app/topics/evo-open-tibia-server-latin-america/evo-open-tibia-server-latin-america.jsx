import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-latin-america');
}

export default function EvoOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-latin-america" />;
}

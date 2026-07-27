import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-usa');
}

export default function EvoOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-usa" />;
}

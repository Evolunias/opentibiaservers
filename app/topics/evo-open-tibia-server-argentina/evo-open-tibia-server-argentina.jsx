import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-argentina');
}

export default function EvoOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-argentina" />;
}

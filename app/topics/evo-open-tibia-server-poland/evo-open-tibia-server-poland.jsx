import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-poland');
}

export default function EvoOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-poland" />;
}

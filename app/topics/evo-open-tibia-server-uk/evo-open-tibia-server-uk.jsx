import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-uk');
}

export default function EvoOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-uk" />;
}

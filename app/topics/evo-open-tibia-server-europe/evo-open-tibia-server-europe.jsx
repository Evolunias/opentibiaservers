import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-europe');
}

export default function EvoOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-europe" />;
}

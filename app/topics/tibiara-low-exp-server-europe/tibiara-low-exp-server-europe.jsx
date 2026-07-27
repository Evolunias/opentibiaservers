import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-europe');
}

export default function TibiaraLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-europe" />;
}

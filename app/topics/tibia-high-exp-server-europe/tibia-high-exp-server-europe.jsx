import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-europe');
}

export default function TibiaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-europe" />;
}

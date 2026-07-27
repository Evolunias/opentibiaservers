import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-uk');
}

export default function TibiaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-uk" />;
}

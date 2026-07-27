import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-uk');
}

export default function TibiaraLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-uk" />;
}

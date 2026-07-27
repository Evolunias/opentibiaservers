import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-poland');
}

export default function TibiaraLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-poland" />;
}

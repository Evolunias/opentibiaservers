import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-poland');
}

export default function TibiaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-poland" />;
}

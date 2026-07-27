import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-germany');
}

export default function TibiaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-germany" />;
}

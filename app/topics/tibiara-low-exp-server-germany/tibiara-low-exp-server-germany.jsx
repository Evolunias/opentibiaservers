import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-germany');
}

export default function TibiaraLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-germany" />;
}

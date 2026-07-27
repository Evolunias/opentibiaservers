import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-high-exp');
}

export default function TibiaHighExpServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-high-exp" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server');
}

export default function TibiaHighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server" />;
}

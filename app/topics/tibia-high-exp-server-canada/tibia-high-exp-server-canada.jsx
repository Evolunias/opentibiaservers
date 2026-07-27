import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-canada');
}

export default function TibiaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-canada" />;
}

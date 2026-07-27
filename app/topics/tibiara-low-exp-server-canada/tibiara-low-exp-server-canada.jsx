import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-canada');
}

export default function TibiaraLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-canada" />;
}

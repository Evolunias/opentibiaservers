import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-usa');
}

export default function TibiaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-usa" />;
}

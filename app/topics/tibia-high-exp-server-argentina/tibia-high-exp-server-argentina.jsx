import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-argentina');
}

export default function TibiaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-argentina" />;
}

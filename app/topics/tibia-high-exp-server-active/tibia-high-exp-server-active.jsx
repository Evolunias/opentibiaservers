import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-active');
}

export default function TibiaHighExpServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-active" />;
}

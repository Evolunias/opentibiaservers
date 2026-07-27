import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-client');
}

export default function Tibia854HighExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-client" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-high-exp-client');
}

export default function Tibia80HighExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-high-exp-client" />;
}

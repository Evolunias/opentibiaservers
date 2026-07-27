import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-high-exp-servers');
}

export default function Tibia74HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-high-exp-servers" />;
}

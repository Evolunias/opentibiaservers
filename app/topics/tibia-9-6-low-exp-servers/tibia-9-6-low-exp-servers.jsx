import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-servers');
}

export default function Tibia96LowExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-servers" />;
}

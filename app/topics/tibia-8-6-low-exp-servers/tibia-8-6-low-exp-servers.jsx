import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-low-exp-servers');
}

export default function Tibia86LowExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-low-exp-servers" />;
}

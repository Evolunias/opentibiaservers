import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-servers');
}

export default function Tibia11LowExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-servers" />;
}

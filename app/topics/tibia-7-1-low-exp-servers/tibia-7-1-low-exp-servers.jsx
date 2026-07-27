import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-servers');
}

export default function Tibia71LowExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-servers" />;
}

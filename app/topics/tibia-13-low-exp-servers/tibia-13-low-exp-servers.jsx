import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-servers');
}

export default function Tibia13LowExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-servers');
}

export default function Tibia14LowExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-low-exp-servers');
}

export default function Tibia100LowExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-low-exp-servers" />;
}

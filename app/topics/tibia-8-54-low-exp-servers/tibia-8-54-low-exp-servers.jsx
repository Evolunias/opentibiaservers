import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-low-exp-servers');
}

export default function Tibia854LowExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-low-exp-servers" />;
}

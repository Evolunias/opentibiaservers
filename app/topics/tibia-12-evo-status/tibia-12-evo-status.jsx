import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-evo-status');
}

export default function Tibia12EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-evo-status" />;
}

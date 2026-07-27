import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-evo-status');
}

export default function Tibia80EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-evo-status" />;
}

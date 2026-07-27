import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-fresh-start-status');
}

export default function Tibia84FreshStartStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-fresh-start-status" />;
}

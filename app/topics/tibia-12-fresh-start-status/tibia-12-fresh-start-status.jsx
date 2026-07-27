import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-status');
}

export default function Tibia12FreshStartStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-status" />;
}

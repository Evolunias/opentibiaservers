import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-status');
}

export default function Tibia14FreshStartStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-status" />;
}

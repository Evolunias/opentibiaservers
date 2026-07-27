import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-status');
}

export default function Tibia15FreshStartStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-status" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-status');
}

export default function Tibia13FreshStartStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-status" />;
}

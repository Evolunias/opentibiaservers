import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-status');
}

export default function Tibia11FreshStartStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-status" />;
}

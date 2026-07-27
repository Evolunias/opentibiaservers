import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-south-america');
}

export default function ThaisotFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-south-america" />;
}

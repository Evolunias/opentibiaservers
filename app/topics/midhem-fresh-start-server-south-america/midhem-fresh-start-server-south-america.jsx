import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-south-america');
}

export default function MidhemFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-south-america" />;
}

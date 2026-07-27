import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-north-america');
}

export default function MidhemFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-north-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-south-america-servers');
}

export default function MidhemSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-south-america-servers" />;
}

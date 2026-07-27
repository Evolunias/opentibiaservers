import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-usa-servers');
}

export default function MidhemUsaServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-usa-servers" />;
}

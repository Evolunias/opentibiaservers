import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-germany-servers');
}

export default function MidhemGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-germany-servers" />;
}

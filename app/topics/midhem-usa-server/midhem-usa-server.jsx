import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-usa-server');
}

export default function MidhemUsaServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-usa-server" />;
}

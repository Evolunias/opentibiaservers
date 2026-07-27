import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fun-server');
}

export default function MidhemFunServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-fun-server" />;
}

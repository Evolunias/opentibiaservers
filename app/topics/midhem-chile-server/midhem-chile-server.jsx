import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-chile-server');
}

export default function MidhemChileServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-chile-server" />;
}

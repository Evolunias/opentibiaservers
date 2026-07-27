import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-ot-server');
}

export default function MidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-ot-server" />;
}

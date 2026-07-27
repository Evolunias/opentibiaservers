import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-ot-server');
}

export default function CurrentMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-ot-server" />;
}

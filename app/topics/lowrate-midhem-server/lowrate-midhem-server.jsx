import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-server');
}

export default function LowrateMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-server" />;
}

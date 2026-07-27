import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-ot-server');
}

export default function LowrateMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-ot-server" />;
}

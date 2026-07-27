import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-ot-server');
}

export default function TopMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-ot-server" />;
}

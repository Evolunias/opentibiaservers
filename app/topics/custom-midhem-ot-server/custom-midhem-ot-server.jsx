import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-ot-server');
}

export default function CustomMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-ot-server" />;
}

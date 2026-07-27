import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-ot-server');
}

export default function ActiveMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-ot-server');
}

export default function TopCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-ot-server" />;
}

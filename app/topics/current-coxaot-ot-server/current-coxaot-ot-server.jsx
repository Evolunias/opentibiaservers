import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-ot-server');
}

export default function CurrentCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-ot-server" />;
}

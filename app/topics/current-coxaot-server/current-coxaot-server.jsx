import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-server');
}

export default function CurrentCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-server" />;
}

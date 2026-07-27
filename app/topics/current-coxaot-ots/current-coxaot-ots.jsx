import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-ots');
}

export default function CurrentCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-ots" />;
}

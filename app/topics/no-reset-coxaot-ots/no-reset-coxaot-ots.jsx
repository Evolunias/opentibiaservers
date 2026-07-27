import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-ots');
}

export default function NoResetCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-ots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-ot');
}

export default function NoResetCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-ot" />;
}

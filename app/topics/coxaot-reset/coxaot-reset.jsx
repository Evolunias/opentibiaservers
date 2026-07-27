import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-reset');
}

export default function CoxaotResetKeywordPage() {
  return <StaticKeywordPage slug="coxaot-reset" />;
}

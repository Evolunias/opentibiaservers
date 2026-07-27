import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-status');
}

export default function CoxaotStatusKeywordPage() {
  return <StaticKeywordPage slug="coxaot-status" />;
}

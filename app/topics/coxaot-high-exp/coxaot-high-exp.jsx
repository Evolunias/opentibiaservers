import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp');
}

export default function CoxaotHighExpKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp" />;
}

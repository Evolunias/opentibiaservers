import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-high-exp-server');
}

export default function Coxaot71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-high-exp-server" />;
}

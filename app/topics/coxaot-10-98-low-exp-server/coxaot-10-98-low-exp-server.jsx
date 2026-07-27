import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-low-exp-server');
}

export default function Coxaot1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-low-exp-server" />;
}

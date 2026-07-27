import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-canada-server');
}

export default function CoxaotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-canada-server" />;
}

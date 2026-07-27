import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-germany-server');
}

export default function CoxaotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-germany-server" />;
}

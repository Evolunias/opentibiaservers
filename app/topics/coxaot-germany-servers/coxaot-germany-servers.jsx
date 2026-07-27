import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-germany-servers');
}

export default function CoxaotGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-germany-servers" />;
}

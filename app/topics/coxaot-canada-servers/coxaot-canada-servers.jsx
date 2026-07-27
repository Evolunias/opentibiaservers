import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-canada-servers');
}

export default function CoxaotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-canada-servers" />;
}

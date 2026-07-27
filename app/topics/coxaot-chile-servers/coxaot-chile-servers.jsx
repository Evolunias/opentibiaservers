import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-chile-servers');
}

export default function CoxaotChileServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-chile-servers" />;
}

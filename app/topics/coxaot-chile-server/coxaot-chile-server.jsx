import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-chile-server');
}

export default function CoxaotChileServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-chile-server" />;
}

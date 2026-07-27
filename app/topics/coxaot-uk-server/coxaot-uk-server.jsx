import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-uk-server');
}

export default function CoxaotUkServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-uk-server" />;
}

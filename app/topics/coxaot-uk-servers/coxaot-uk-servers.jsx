import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-uk-servers');
}

export default function CoxaotUkServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-uk-servers" />;
}

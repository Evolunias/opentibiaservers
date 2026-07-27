import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-uk');
}

export default function CoxaotRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-uk" />;
}

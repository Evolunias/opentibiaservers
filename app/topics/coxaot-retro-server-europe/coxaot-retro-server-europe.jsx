import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-europe');
}

export default function CoxaotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-europe" />;
}

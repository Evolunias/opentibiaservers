import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-germany');
}

export default function CoxaotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-germany" />;
}

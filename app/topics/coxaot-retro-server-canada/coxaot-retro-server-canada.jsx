import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-canada');
}

export default function CoxaotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-canada" />;
}

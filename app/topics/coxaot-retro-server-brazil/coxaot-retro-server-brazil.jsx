import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-brazil');
}

export default function CoxaotRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-brazil" />;
}

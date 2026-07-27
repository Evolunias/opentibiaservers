import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-argentina');
}

export default function CoxaotRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-argentina" />;
}

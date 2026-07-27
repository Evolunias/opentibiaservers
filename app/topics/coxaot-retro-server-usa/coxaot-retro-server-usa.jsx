import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-usa');
}

export default function CoxaotRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-mexico');
}

export default function CoxaotRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-mexico" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-latin-america');
}

export default function CoxaotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-latin-america" />;
}

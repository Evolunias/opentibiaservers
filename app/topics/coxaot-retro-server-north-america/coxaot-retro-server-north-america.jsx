import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-north-america');
}

export default function CoxaotRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-north-america" />;
}

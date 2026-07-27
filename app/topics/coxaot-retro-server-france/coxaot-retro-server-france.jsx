import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-france');
}

export default function CoxaotRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-france" />;
}

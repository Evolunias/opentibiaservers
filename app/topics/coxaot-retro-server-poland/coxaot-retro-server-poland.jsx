import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-poland');
}

export default function CoxaotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-poland" />;
}

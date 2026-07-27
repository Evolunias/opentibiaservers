import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-south-america');
}

export default function CoxaotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-south-america" />;
}

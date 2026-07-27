import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-retro-server-sweden');
}

export default function CoxaotRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-retro-server-sweden" />;
}

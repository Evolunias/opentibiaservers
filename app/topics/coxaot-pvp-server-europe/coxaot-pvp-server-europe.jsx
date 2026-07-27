import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-europe');
}

export default function CoxaotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-europe" />;
}

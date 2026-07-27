import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-bosses');
}

export default function CoxaotBossesKeywordPage() {
  return <StaticKeywordPage slug="coxaot-bosses" />;
}

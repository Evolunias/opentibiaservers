import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-season');
}

export default function CoxaotSeasonKeywordPage() {
  return <StaticKeywordPage slug="coxaot-season" />;
}

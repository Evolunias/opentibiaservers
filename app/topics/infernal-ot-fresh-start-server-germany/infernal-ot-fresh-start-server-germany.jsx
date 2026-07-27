import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-fresh-start-server-germany');
}

export default function InfernalOtFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-fresh-start-server-germany" />;
}

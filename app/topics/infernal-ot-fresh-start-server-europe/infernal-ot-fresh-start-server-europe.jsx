import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-fresh-start-server-europe');
}

export default function InfernalOtFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-fresh-start-server-europe" />;
}

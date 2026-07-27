import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-fresh-start-server-poland');
}

export default function InfernalOtFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-fresh-start-server-poland" />;
}

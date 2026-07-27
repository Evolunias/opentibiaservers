import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp-server-europe');
}

export default function InfernalOtHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp-server-europe" />;
}

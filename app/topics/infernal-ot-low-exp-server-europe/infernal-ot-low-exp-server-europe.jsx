import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-europe');
}

export default function InfernalOtLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-europe" />;
}

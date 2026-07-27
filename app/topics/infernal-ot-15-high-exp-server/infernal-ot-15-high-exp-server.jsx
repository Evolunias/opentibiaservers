import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-high-exp-server');
}

export default function InfernalOt15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-high-exp-server" />;
}

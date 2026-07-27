import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-high-exp-server');
}

export default function InfernalOt11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-high-exp-server" />;
}

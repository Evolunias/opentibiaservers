import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-high-exp-server');
}

export default function InfernalOt74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-high-exp-server" />;
}

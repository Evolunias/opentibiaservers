import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-high-exp-server');
}

export default function InfernalOt86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-high-exp-server" />;
}

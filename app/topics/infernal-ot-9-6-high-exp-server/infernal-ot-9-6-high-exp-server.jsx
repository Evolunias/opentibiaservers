import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-high-exp-server');
}

export default function InfernalOt96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-high-exp-server" />;
}

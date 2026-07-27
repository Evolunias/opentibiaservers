import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-high-exp-server');
}

export default function InfernalOt13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-high-exp-server" />;
}

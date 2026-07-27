import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-high-exp-server');
}

export default function InfernalOt81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-high-exp-server" />;
}

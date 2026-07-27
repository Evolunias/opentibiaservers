import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-high-exp-server');
}

export default function InfernalOt71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-high-exp-server" />;
}

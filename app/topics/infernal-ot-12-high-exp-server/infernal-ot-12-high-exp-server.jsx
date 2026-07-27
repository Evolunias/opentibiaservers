import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-high-exp-server');
}

export default function InfernalOt12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-high-exp-server" />;
}

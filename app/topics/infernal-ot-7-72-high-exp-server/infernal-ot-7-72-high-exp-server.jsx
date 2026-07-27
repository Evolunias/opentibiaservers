import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-72-high-exp-server');
}

export default function InfernalOt772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-72-high-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-high-exp-server');
}

export default function InfernalOt100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-high-exp-server" />;
}

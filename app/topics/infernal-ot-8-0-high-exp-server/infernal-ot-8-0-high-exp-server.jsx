import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-high-exp-server');
}

export default function InfernalOt80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-high-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-98-high-exp-server');
}

export default function InfernalOt1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-98-high-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-high-exp-server');
}

export default function InfernalOt84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-high-exp-server" />;
}

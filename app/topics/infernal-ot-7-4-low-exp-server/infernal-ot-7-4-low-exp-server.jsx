import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-low-exp-server');
}

export default function InfernalOt74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-low-exp-server" />;
}

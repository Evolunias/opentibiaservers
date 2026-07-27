import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-low-exp-server');
}

export default function InfernalOt84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-low-exp-server" />;
}

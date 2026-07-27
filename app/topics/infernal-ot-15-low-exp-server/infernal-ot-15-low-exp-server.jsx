import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-low-exp-server');
}

export default function InfernalOt15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-low-exp-server" />;
}

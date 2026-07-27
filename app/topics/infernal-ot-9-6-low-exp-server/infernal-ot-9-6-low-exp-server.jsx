import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-low-exp-server');
}

export default function InfernalOt96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-low-exp-server" />;
}

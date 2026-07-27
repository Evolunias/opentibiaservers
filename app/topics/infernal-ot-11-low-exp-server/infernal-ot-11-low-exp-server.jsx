import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-low-exp-server');
}

export default function InfernalOt11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-low-exp-server" />;
}

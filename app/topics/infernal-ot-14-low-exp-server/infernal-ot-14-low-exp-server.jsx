import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-low-exp-server');
}

export default function InfernalOt14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-low-exp-server" />;
}

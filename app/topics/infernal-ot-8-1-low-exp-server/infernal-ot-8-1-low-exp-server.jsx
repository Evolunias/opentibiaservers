import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-low-exp-server');
}

export default function InfernalOt81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-low-exp-server" />;
}

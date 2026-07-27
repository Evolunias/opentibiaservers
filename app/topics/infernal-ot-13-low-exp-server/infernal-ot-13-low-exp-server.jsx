import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-low-exp-server');
}

export default function InfernalOt13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-low-exp-server" />;
}

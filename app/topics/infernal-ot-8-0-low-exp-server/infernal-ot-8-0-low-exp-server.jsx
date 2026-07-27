import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-low-exp-server');
}

export default function InfernalOt80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-low-exp-server" />;
}

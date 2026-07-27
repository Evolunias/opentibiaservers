import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-6-low-exp-server');
}

export default function InfernalOt76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-6-low-exp-server" />;
}

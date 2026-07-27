import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-low-exp-server');
}

export default function InfernalOt12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-low-exp-server" />;
}

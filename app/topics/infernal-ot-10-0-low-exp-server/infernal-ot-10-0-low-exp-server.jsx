import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-low-exp-server');
}

export default function InfernalOt100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-low-exp-server" />;
}

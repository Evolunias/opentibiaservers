import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-no-reset-server');
}

export default function InfernalOt96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-no-reset-server" />;
}

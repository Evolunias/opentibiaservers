import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-no-reset-server');
}

export default function InfernalOt71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-no-reset-server" />;
}

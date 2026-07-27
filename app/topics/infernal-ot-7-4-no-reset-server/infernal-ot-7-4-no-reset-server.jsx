import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-no-reset-server');
}

export default function InfernalOt74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-no-reset-server" />;
}

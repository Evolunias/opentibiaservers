import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-no-reset-server');
}

export default function InfernalOt11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-no-reset-server');
}

export default function InfernalOt15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-no-reset-server" />;
}

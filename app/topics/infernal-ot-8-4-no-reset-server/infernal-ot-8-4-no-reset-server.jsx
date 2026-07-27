import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-no-reset-server');
}

export default function InfernalOt84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-no-reset-server');
}

export default function InfernalOt86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-no-reset-server" />;
}

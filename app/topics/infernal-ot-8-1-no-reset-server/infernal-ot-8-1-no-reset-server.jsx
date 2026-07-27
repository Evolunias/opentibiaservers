import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-no-reset-server');
}

export default function InfernalOt81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-no-reset-server" />;
}
